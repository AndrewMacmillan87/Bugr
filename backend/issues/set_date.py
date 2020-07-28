import sys
from datetime import datetime
import json

from helpers import find_file, app_data_path, app_data

# project_name = sys.argv[1]
# project_id = sys.argv[2]
# group_id = sys.argv[3]
# group_id = sys.argv[4]
# new_date = sys.argv[4]
project_name = 'Some Application'
project_id = '3a3c2c18-7aba-4227-8859-6c7036a91298'
group_id = 'a7ce031b-db26-4c83-99fa-6e72ff841704'
issue_id = 'c9b40293-c171-441e-bce0-8f68df4c3dfc'
new_date = '05/08/2020'
now = datetime.now()
today = f'{now.day}/{now.month}/{now.year}'
file_path = find_file(app_data, app_data_path, project_id)

with open(file_path, 'r') as file:
    original_data = file.read()
    original_data_dict = json.loads(original_data)
    groups = original_data_dict['groups']
    found = False
    for group in groups:
        if group['group_id'] == group_id:
            for issue in group['issues']:
                if issue['issue_id'] == issue_id:
                    issue['finish_by'] = new_date
                    found = True
                    break
            if found:
                break

with open(file_path, 'w+') as new_file:
    new_json_data = json.dumps(original_data_dict)
    new_file.write(new_json_data)
