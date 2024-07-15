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
    <form className='flex  flex-col gap-4 mt-6' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-1 '>
        <label className='text-[10px] pl-2 font-medium'>Full Name</label>
        <input
        required
            className='border text-gray-400 border-gray-300 text-[10px] rounded-full w-full p-2'
            placeholder='Enter your full name'
          type="text"
          {...register('fullName', { required: "Full name is required" })}
        />
        {errors.fullName && <span className="text-[8px] -mt-2 ml-2  text-yellow-500">{errors.fullName.text}</span>}
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-[10px] pl-2 font-medium'>City:</label>
        <input
        required
        placeholder='Enter your city name'
        className='border text-gray-400 border-gray-300 text-[10px] rounded-full w-full p-2'
          type="text"
          {...register('city', { required: 'City is required' })}
        />
        {errors.city && <span className="text-[10px] -mt-1 ml-2  text-yellow-500" >{errors.city.message}</span>}
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-[10px] pl-2 font-medium'>Mobile Number:</label>
        <input
        required
        placeholder='Enter your mobile number'
        className='border text-gray-400 border-gray-300 text-[10px] rounded-full w-full p-2'
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
        {errors.mobileNumber && <span className="text-[10px] -mt-1 ml-2  text-yellow-500">{errors.mobileNumber.message}</span>}
      </div>

      <div className='flex flex-col gap-1'>
        <label className='text-[10px] pl-2 font-medium'>Date of Birth:</label>
        <input
        required
        className='border text-gray-400 border-gray-300 text-[10px] rounded-full w-full p-2'
          type="date"
          {...register('dob', { required: 'Date of birth is required' })}
        />
        {errors.dob && <span className="text-[10px] -mt-1 ml-2  text-yellow-500">{errors.dob.message}</span>}
      </div>

      <button className='bg-[#FEC628] rounded-full font-medium py-2 text-[10px] mt-2 ' type="submit">Let the conversation begin!</button>
      <h1 className='pb-4 flex items-center justify-center font-medium text-[10px] '>By logging in you aggree to our terms of use and privacy policy</h1>
    </form>
  );
};

export default MyHookForm;
