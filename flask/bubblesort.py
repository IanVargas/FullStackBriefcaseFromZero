def bubble_sort(unordered_list):
    for index in range(0,len(unordered_list)):
        
        for inner_index in range (0,len(unordered_list)-1):
            current_number = unordered_list[inner_index]
            next_number = unordered_list[inner_index+1]

            if current_number > next_number:
                unordered_list[inner_index] = next_number
                unordered_list[inner_index+1] = current_number
                has_made_changes = True
    
    if not has_made_changes:
        return unordered_list

    return unordered_list
               

unordered_list = [1,10,23,2,3,4,9,8]
sorted_list = bubble_sort(unordered_list)
print(sorted_list)