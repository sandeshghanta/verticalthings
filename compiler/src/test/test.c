/********************************************************************************
This code is automatically generated by the VerticalThings compiler. DO NOT EDIT!
********************************************************************************/
/*Managed memory variables*/
unsigned char __vtmem[520];
int (*test_mod_matrix_p)[10][10]= (int (*)[10][10]) &__vtmem[0];
#define test_mod_matrix (*test_mod_matrix_p)
int (*test_mod2_factors_p)[10]= (int (*)[10]) &__vtmem[400];
#define test_mod2_factors (*test_mod2_factors_p)
int (*test_mod_acquire_buf_p)[10]= (int (*)[10]) &__vtmem[440];
#define test_mod_acquire_buf (*test_mod_acquire_buf_p)
int (*test_mod_acquire_ybuf_p)[10]= (int (*)[10]) &__vtmem[480];
#define test_mod_acquire_ybuf (*test_mod_acquire_ybuf_p)
/*End of managed memory variables*/
/*Module vars for test_mod*/
/*End of module vars for test_mod*/
/*Module vars for arduino*/
/*End of module vars for arduino*/
/*Module vars for test_mod2*/
/*End of module vars for test_mod2*/
int (*test_mod2_process_data_p)[10];
#define test_mod2_process_data (*test_mod2_process_data_p)
typedef enum { __test_mod_acquire, __test_mod2_process}  __icane_test;
 __icane_test __state = __test_mod_acquire;
void _test_mod_acquire()
{
const int test_mod_acquire_size=10;
int __t0;
{
pinPeripheral(3, 4);
getFIFOBytes(test_mod_acquire_buf, test_mod_acquire_size);
for(int __i=0; __i<10; __i++)
{
__t0=0;
for(int __j=0; __j<10; __j++)
{
__t0=((test_mod_matrix[__i][__j]*test_mod_acquire_buf[__j])+__t0);
}
test_mod_acquire_ybuf[__i]=(__t0+test_mod_acquire_buf[__i]);
}
test_mod2_process_data_p = &(test_mod_acquire_ybuf); __state = __test_mod2_process;
}
}
int _test_mod2_compute(int test_mod2_compute_val[10], int test_mod2_compute_scale)
{
int test_mod2_compute_result;
int __t0;
{
__t0=0;
for(int __i=0; __i<10; __i++)
{
__t0=((test_mod2_compute_val[__i]*test_mod2_factors[__i])+__t0);
}
test_mod2_compute_result=(__t0+test_mod2_compute_scale);
return test_mod2_compute_result;
}
}
void _test_mod2_process()
{
const int test_mod2_process_x=3;
{
_test_mod2_compute(test_mod2_process_data, test_mod2_process_x);
}
}
void loop()
{
switch(__state)
{
case __test_mod_acquire:
__state = __test_mod_acquire;
___test_mod_acquire();
break;
case __test_mod2_process:
__state = __test_mod_acquire;
___test_mod2_process();
break;
default :
__state = __test_mod_acquire;
}
}
void setup()
{
}