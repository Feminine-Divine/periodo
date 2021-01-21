import Link from 'next/link';
const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
	  <h2 className="mt-6 text-center text-3xl leading-9 font-   extrabold text-gray-900">Sign up</h2>
          <p className="mt-2 text-center text-md text-gray-600">
	    already have an account?{' '}
	    <Link href="/login">
	      <a href="#" className="text-blue-500">Log in</a>
	    </Link>
	  </p>
	</div>
      <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        Todo: Create Sign up form component and add here
      </div>
    </div>
  </div>
  );
};
export default SignUpPage;