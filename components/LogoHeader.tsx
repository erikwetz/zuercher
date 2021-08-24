import { useRouter } from 'next/router';
import Image from 'next/image';
import Z_Logo from '../assets/images/Z_Logo.png';

export default function LogoHeader() {
  const router = useRouter();
  return (
    <Image
      className="cursor-pointer"
      onClick={() => router.push('/home')}
      src={Z_Logo}
      alt="Zurcher Logo"
      width={173}
      height={58}
    />
  );
}
