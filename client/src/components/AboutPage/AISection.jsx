import img0001 from "../../assets/images/img0001.webp";
import img0002 from "../../assets/images/img0002.webp";
import img0003 from "../../assets/images/img0003.webp";
import img0004 from "../../assets/images/img0004.webp";

export default function AIPictures() {
  return (
    <div className="mt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="font-custom text-3xl font-bold tracking-tight text-blue-800 sm:text-4xl">
              Artificial Intelligence
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-300">
              In the realm of web design and development, the integration of AI tools and
              generated images marks a revolutionary shift, heralding a future
              where creativity knows no bounds. This innovative approach not
              only accelerates the design process but also unlocks new avenues
              for artistic expression and personalization.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              We are not just looking at the future possibilities of web design;
              we are actively stepping into a new era where technology and
              creativity merge to create digital experiences that were once
              deemed impossible. Embracing AI in web design allows us to push
              the boundaries of what can be achieved, ensuring that we stay at
              the forefront of innovation and continue to deliver cutting-edge,
              captivating websites.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src={img0001}
                alt="a woman next to a creek in the forest walking away from the camera"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-950 object-cover shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src={img0002}
                  alt="a close-up picture of a glass of tea"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-950 object-cover shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src={img0003}
                  alt="a picture of a rocky beach with rough waves"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-950 object-cover shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src={img0004}
                  alt="a close-up picture of a plate with steak and potatoes"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-950 object-cover shadow-lg shadow-blue-400/40 ring-2 ring-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
