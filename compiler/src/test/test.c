/********************************************************************************
This code is automatically generated by the VerticalThings compiler. DO NOT EDIT!
********************************************************************************/
/*Managed memory variables*/
unsigned char __vtmem[280];
float (*test_mod_buf_p)[30]= (float (*)[30]) &__vtmem[0];
#define test_mod_buf (*test_mod_buf_p)
int (*test_mod_temp_A_p)[20]= (int (*)[20]) &__vtmem[120];
#define test_mod_temp_A (*test_mod_temp_A_p)
int (*test_mod_temp_B_p)[20]= (int (*)[20]) &__vtmem[200];
#define test_mod_temp_B (*test_mod_temp_B_p)
/*End of managed memory variables*/
/*Module vars for test_mod*/
MPU test_mod_mpu;
/*End of module vars for test_mod*/
/*Module vars for arduino*/
/*End of module vars for arduino*/
typedef enum { __test_mod_test_func}  __test_pipeline;
 __test_pipeline __state = __test_mod_test_func;
void _test_mod_test_func()
{
    int test_mod_test_func_sum, test_mod_test_func_size;
    {
        pinPeripheral(3, 4);
        test_mod_mpu.getFIFOBytes(test_mod_buf, test_mod_test_func_size);
        for(int i=0; i<20; i++)
        {
            _test_mod_temp();
        }
    }
}
void _test_mod_temp()
{
    int test_mod_temp_sum1;
    int test_mod_temp_C;
    int __t0;
    int __t1;
    int __t2;
    {
        for(int __i=0; __i<20; __i++)
        {
            test_mod_temp_B[__i]=0;
        }
        test_mod_temp_C=0;
        __t2=0;
        for(int __i=0; __i<20; __i++)
        {
            test_mod_temp_A[__i]=0;
            __t0=(test_mod_temp_B[__i]+test_mod_temp_A[__i]);
            __t1=(test_mod_temp_B[__i]+test_mod_temp_A[__i]);
            __t2=((__t0*__t1)+__t2);
        }
        test_mod_temp_C=__t2;
    }
}
void loop()
{
    switch(__state)
    {
        case __test_mod_test_func:
        __state = __test_mod_test_func;
        _test_mod_test_func();
        break;
        default :
        __state = __test_mod_test_func;
    }
}
void setup()
{
}