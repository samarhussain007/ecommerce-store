import Link from "next/link";

import { Container } from "@/components/ui/Container";
import MainNav from "@/components/MainNav";
import NavbarActions from "@/components/NavbarActions";
import { getCategories } from "@/actions/get-categories";
import Image from "next/image";
import next from "../public/logo.webp";
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link
            href="/"
            className="ml-4 flex lg:ml-0 gap-x-2  items-center justify-center"
          >
            <div className="h-10 w-10 ">
              <Image
                src="/logo.webp"
                className="rounded-md"
                width="100"
                height={100}
                alt=""
              />
            </div>
            {/* <p className="font-bold text-xl">AnimeX</p> */}
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
