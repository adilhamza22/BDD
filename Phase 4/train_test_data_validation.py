from deepchecks.tabular.datasets.classification import lending_club
import pandas as pd
from deepchecks.tabular import Dataset
from deepchecks.tabular.suites import data_integrity
from deepchecks.tabular.suites import train_test_validation

if __name__ == "__main__":
    # load data
    data = lending_club.load_data(data_format='Dataframe', as_train_test=False)
    data.head(2)
    # convert date column to datetime, `issue_d`` is date column
    data['issue_d'] = pd.to_datetime(data['issue_d'])

    # Use data from June and July for train and August for test:
    train_df = data[data['issue_d'].dt.month.isin([6, 7])]
    test_df = data[data['issue_d'].dt.month.isin([8])]

    categorical_features = ['addr_state', 'application_type', 'home_ownership','initial_list_status', 'purpose', 'term', 'verification_status', 'sub_grade']
    index_name = 'id'
    label = 'loan_status'  # 0 is DEFAULT, 1 is OK
    datetime_name = 'issue_d'

    # Categorical features can be heuristically inferred, however we
    # recommend to state them explicitly to avoid misclassification.

    # Metadata attributes are optional. Some checks will run only if specific attributes are declared.
    train_ds = Dataset(train_df, label=label, cat_features=categorical_features, index_name=index_name, datetime_name=datetime_name)
    test_ds = Dataset(test_df, label=label, cat_features=categorical_features, index_name=index_name, datetime_name=datetime_name)

    # for convenience lets save it in a dictionary so we can reuse them for future Dataset initializations
    columns_metadata = {'cat_features': categorical_features, 'index_name': index_name, 'label': label, 'datetime_name': datetime_name}

    validation_suite = train_test_validation()
    suite_result = validation_suite.run(train_ds, test_ds)

    suite_result.show()
    
