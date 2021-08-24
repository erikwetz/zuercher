import Image from 'next/image';
import Hero_Image from '../assets/images/Hero_Image.jpg';

export default function LogoHeader() {
  return (
    <Image
      className="object-cover w-full h-full"
      src={Hero_Image}
      alt="Hero Image"
      layout="fill"
      placeholder="blur"
    />
  );
}
