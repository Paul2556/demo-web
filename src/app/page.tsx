import { Button } from "@/components/ui/button";
export function ButtonDemo() {
  return <Button>Button</Button>;
}
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div>
      <header className="px-10 py-3 text-zinc-50 flex bg-green-600 items-stretch">
        <div className="gap-5 sticky flex">
          <div className="">1st Floor New World.</div>
          <div className="">+998556778345</div>
          <div className="">demo@example.com</div>
        </div>
        <div className="grow"></div>
        <div className="gap-5 sticky flex">
          <div>News and Media</div>
          <div>FAQ`S</div>
        </div>
      </header>
      <header
        className="bg-white py-7 flex items-stretch px-12"
        style={{ position: "static" }}
      >
        <Image
          className="sticky flex my-3 px-2"
          src="/logo.png"
          alt="logo"
          width={185}
          height={35}
        ></Image>
        <div className="grow"></div>
        <div className="gap-5 sticky flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Home Page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Home Page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Home Page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Home Page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Home Page</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="hover:text-green-600">
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="bg-green-600 px-7 py-7 text-xl">
            Request Now
          </Button>
        </div>
      </header>
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image
          src="/slider-bg-image.jpg"
          alt="image"
          width={990}
          height={660}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
        <Image
          src="/paul.png"
          alt="image"
          width={400}
          height={200}
          style={{
            position: "absolute",
            bottom: "0px",
            left: "85%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        />
        <div className="">
          <h1
            className="text-white font-extrabold text-7xl leading-normal "
            style={{
              position: "absolute",
              bottom: "35%",
              left: "0%",
            }}
          >
            Best It Solution <br></br>
            Company
          </h1>
          <h1
            className="text-white text-xl leading-normal"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "0%",
            }}
          >
            There are many variations of passages of Lorem Lpsum avalible, but
            have<br></br>
            suffered alterations in some form.
          </h1>
        </div>
      </div>
    </div>
  );
}
