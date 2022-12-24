import { useForm } from 'react-hook-form';

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register('email')} placeholder="Email" />
        <input {...register('firstName')} placeholder="First Name" />
        <input {...register('lastName')} placeholder="Last Name" />
        <input {...register('userName')} placeholder="User Name" />
        <input {...register('password')} placeholder="Password" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
