import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddUser = () => {
    const { register, formState: { errors } } = useForm();

    const handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        const url = `https://sleepy-hamlet-35110.herokuapp.com/user`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Successfully Created New User')
                    event.target.reset();
                }
            })

    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-purple-500'>Create New User</h2>

            <div className='flex justify-center items-center'>
            <div className='card w-96 shadow-xl'>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-control w-full max-w-xs'>
                            
                            <input
                                type="text"
                                placeholder='Full Name'
                                className='input input-bordered w-full max-w-xs'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })

                                }
                            />
                            <label className='label'>
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className='form-control w-full max-w-xs'>
                            
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='input input-bordered w-full max-w-xs'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                })}
                            />
                            <label className='label'>
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className='form-control w-full max-w-xs'>
                            <input
                                type="password"
                                placeholder='Password'
                                className='input input-bordered w-full max-w-xs'
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 Characters or longer'
                                    }
                                })}
                            />
                            <label className='label'>
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn text-white w-full max-w-xs' type="submit" value="CREATE" />
                    </form>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddUser;