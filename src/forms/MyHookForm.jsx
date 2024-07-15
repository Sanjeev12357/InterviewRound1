// src/components/MyHookForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const MyHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  return (
    <form className='flex  flex-col gap-6 md:gap-4  mt-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2 md:gap-1 '>
        <label className='text-sm md:text-[10px] pl-2 font-medium'>Full Name</label>
        <input
        required
            className='border text-gray-400 border-gray-300 text-sm md:text-[10px] rounded-full w-full p-2'
            placeholder='Enter your full name'
          type="text"
          {...register('fullName', { required: "Full name is required" })}
        />
        {errors.fullName && <span className="text-[8px] -mt-2 ml-2  text-yellow-500">{errors.fullName.text}</span>}
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm md:text-[10px] pl-2 font-medium'>City:</label>
        <input
        required
        placeholder='Enter your city name'
        className='border text-gray-400 border-gray-300 text-sm md:text-[10px] rounded-full w-full p-2'
          type="text"
          {...register('city', { required: 'City is required' })}
        />
        {errors.city && <span className="text-[10px] -mt-1 ml-2  text-yellow-500" >{errors.city.message}</span>}
      </div>

      <div className='flex flex-col gap-1 relative'>
        <label className='text-sm md:text-[10px] pl-2 font-medium'>Mobile Number:</label>
        <input
        required
        placeholder='Enter your mobile number'
        className='border  text-gray-400 border-gray-300 text-sm md:text-[10px] rounded-full w-full px-10 py-2'
          type="text"
          {...register('mobileNumber', {
            required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
          })}
        />
        <span className='-mt-[30px] ml-2 text-[10px] font-semibold   w-7'>+91 | </span>
        {errors.mobileNumber && <span className="text-[10px] -mt-1 ml-2  text-yellow-500">{errors.mobileNumber.message}</span>}
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-sm md:text-[10px] pl-2 font-medium'>Date of Birth:</label>
        <input
        required
        className='border text-gray-400 border-gray-300 text-sm md:text-[10px] rounded-full w-full p-2'
          type="date"
          {...register('dob', { required: 'Date of birth is required' })}
        />
        {errors.dob && <span className="text-[10px] -mt-1 ml-2  text-yellow-500">{errors.dob.message}</span>}
      </div>

      <button className='bg-[#FEC628] rounded-full font-semibold text-base md:font-medium py-2 md:text-[10px] mt-4 md:mt-2 ' type="submit">Let the conversation begin!</button>
      <h1 className='mt-2 flex items-center justify-center font-normal text-[10px]'>
      By logging in you agree to our 
      <span className='font-medium ml-1 mr-1'>{' '}terms of use</span> 
      {' '}and{' '}
      <span className='font-medium ml-1'>privacy policy</span>
    </h1>
    </form>
  );
};

export default MyHookForm;
