from datetime import datetime,timezone
import re,csv   


data = {
        'name' : 'ian',
        'branch' : 'testing'
        }

headers ={
     'name',
     'branch'
}

# this is your datetime object

download_type = 'web'
fname_address = "wallet_test"
file_created_time = str(datetime.now(timezone.utc)) 
time_for_file_name = re.sub(r'[:+,.]',".",file_created_time) 
f_name = download_type + "_" + fname_address + "_" + time_for_file_name + ".csv"



def write_csv(f_name, data, headers):
    with open(f_name, 'w') as csv_file:
        writter = csv.DictWriter(csv_file,headers)
        writter.writerow(data)

write_csv(f_name,data,headers)