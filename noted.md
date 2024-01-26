Javascript Execution Context
                               __  
1=> Global Execution Context     |
2=> Function Execution Context   |-->(1)
3=> Eval Execution Context     __|  |

        -> Memory creation phase -->(2)
        -> Execution phase -->(3)
    __________________________________     
   |                                 |1- Global Execution ->this
   | let val1 = 10                   | 
   | let val2 = 5                    | 2-Memory Phase
   | function addnum(num1,num2){     |       val1->undefined
   |     let total = num1 +num2      |=====>>val2->undefined
   |     return total                |       addnum->defination
   | }                               |       result1->undefined
   | let result1 = addnum(val1,val2) |       result2->undefined
   | let result2 = addnum(10,2)      | 3-Execution Phase
                                             val1->10           val2->5           
                                             addnum
                                                |->newvariable_environment + execution thread