import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          
          {/* Left illustration - simple coding desk */}
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8679/8679369.png"
              alt="Coding illustration"
              className="w-80 mx-auto md:mx-0"
            />
          </div>

          {/* Text content */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>

            {/* Second illustration - working teamwork graphic */}
            <div className="mt-8 flex justify-center md:justify-start">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8776/8776318.png"
                alt="Teamwork illustration"
                className="w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
