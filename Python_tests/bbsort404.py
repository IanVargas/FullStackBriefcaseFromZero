from datetime import datetime,timezone
import re

# this is your datetime object
time_created = str(datetime.now(timezone.utc))
time_for_file_name = re.sub(r'[:+,.]',"_",time_created)

print(time_for_file_name)