import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../Components/Container';

const TableBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    reset()
  };

  return (
    <section
      style={{
        backgroundImage: `url('https://i.ibb.co/5M0jQt7/f8e8eeffdc29691099a68fb261320bfa.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Container>
        <div className="md:py-28 md:w-2/4 pt-5 ">
          <p className="text-[#BD1F17] font-bold mb-2 text-2xl">■ Book Now</p>
          <h1 className="text-6xl font-bold uppercase text-white">book your table</h1>
          <p className="md:w-3/4 w-full mt-5 text-lg text-[#F7F8F9]">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
          </p>

          <div className="flex items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10 text-white border-gray-700">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                    className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' } })}
                    className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Reservation Date"
                    {...register('date', { required: 'Date is required' })}
                    className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none text-white"
                  />
                  {errors.date && <p className="text-red-500">{errors.date.message}</p>}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Total People"
                    {...register('people', { required: 'Please enter the number of people' })}
                    className="input input-bordered w-full bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500 rounded-none"
                  />
                  {errors.people && <p className="text-red-500">{errors.people.message}</p>}
                </div>
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Message"
                  {...register('message')}
                  className="textarea textarea-bordered w-full rounded-none bg-transparent border-gray-700 placeholder-gray-400 focus:border-yellow-500"
                ></textarea>
              </div>
              <div className="md:mt-6 mt-2">
                <button type="submit" className="btn bg-yellow-500 text-black hover:bg-yellow-600 px-6 py-2 border-none font-bold rounded-none">
                  BOOK NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TableBook;
