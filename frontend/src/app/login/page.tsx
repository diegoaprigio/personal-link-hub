import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LogInIcon } from "lucide-react";
import { Button } from "../_components/ui/button";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="h-full grid grid-cols-2">
      <div className="flex flex-col h-full justify-center items-center p-8 max-w-[550px] mx-auto">
        <Image
          src="/logo.svg"
          alt="LinkHub"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Welcome</h1>
        <p className="text-muted-foreground mb-8">
          LinkHub is a link management tool that allows you to create and manage
          your links in one place. You can create custom links, track clicks,
          and analyze your link performance. With LinkHub, you can easily share
          your links with your audience and get insights on how they are
          performing.
        </p>
        <SignInButton mode="modal">
          <Button className="cursor-pointer" variant="outline">
            <LogInIcon className="mr-2" />
            Login or create an account
          </Button>
        </SignInButton>
      </div>
      <div className="flex flex-col h-full justify-center p-8 max-w-[550px] mx-auto">
        <p>IMAGE</p>
      </div>
    </div>
  );
};

export default LoginPage;
