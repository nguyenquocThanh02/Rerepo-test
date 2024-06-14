import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Register: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const eye = (
    <svg
      width="59"
      height="44"
      viewBox="0 0 59 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1638 1.95356C25.9133 1.53733 27.7045 1.32927 29.5013 1.33356C47.293 1.33356 57.4596 22.0002 57.4596 22.0002C55.9168 24.9339 54.0768 27.6958 51.9696 30.2411M34.8896 27.4769C34.1916 28.2383 33.3498 28.849 32.4144 29.2726C31.4791 29.6962 30.4694 29.924 29.4456 29.9423C28.4218 29.9607 27.4048 29.7693 26.4554 29.3795C25.5059 28.9897 24.6435 28.4096 23.9194 27.6736C23.1954 26.9377 22.6245 26.0611 22.2411 25.0961C21.8576 24.1311 21.6692 23.0974 21.6873 22.0568C21.7053 21.0162 21.9294 19.99 22.3462 19.0393C22.7629 18.0887 23.3638 17.2331 24.113 16.5236M44.5988 37.3452C40.2541 40.7113 34.9636 42.5761 29.5013 42.6669C11.7096 42.6669 1.54297 22.0002 1.54297 22.0002C4.70452 16.0118 9.08952 10.7798 14.4038 6.65523L44.5988 37.3452Z"
        stroke="#4D4D4D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[636px] border mx-auto"
        >
          <div className="logo">
            <svg
              width="53"
              height="78"
              viewBox="0 0 53 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.3355 0.0899264C13.4788 0.030557 13.6324 0 13.7876 0H39C39.1551 0 39.3088 0.030557 39.4521 0.0899264L48.366 3.7822C48.6555 3.9021 48.8855 4.13208 49.0054 4.42155L52.6977 13.3355C52.8176 13.625 52.8176 13.9502 52.6977 14.2397L49.0054 23.1536C48.8855 23.4431 48.6555 23.6731 48.366 23.793L42.0871 26.3938L48.366 28.9946C48.6555 29.1145 48.8855 29.3445 49.0054 29.634L52.6977 38.5479C52.8176 38.8374 52.8176 39.1626 52.6977 39.4521L49.0054 48.366C48.8855 48.6555 48.6555 48.8855 48.366 49.0054L39.4521 52.6977C39.1626 52.8176 38.8374 52.8176 38.5479 52.6977L29.634 49.0054C29.3445 48.8855 29.1145 48.6555 28.9946 48.366L27.5752 44.9391V51.4388C27.5752 51.467 27.5742 51.4949 27.5722 51.5225C27.5742 51.5502 27.5752 51.5781 27.5752 51.6062V64.2124C27.5752 64.3676 27.5446 64.5212 27.4852 64.6645L23.793 73.5784C23.6731 73.8679 23.4431 74.0979 23.1536 74.2178L14.2397 77.9101C13.9502 78.03 13.625 78.03 13.3355 77.9101L4.42155 74.2178C4.13208 74.0979 3.9021 73.8679 3.7822 73.5784L0.0899263 64.6645C-0.0299754 64.375 -0.0299754 64.0498 0.0899263 63.7603L3.7822 54.8464C3.9021 54.5569 4.13208 54.3269 4.42155 54.207L10.9026 51.5225L4.42155 48.838C4.13208 48.7181 3.9021 48.4881 3.7822 48.1986L0.0899263 39.2847C-0.0299754 38.9952 -0.0299754 38.67 0.0899263 38.3805L3.7822 29.4666C3.9021 29.1771 4.13208 28.9471 4.42155 28.8272L10.4984 26.3101L4.42155 23.793C4.13208 23.6731 3.9021 23.4431 3.7822 23.1536L0.0899263 14.2397C-0.0299754 13.9502 -0.0299754 13.625 0.0899263 13.3355L3.7822 4.42155C3.9021 4.13208 4.13208 3.9021 4.42155 3.7822L13.3355 0.0899264ZM13.6406 27.566L6.95919 30.3335L25.2124 48.5867V27.5752H13.7876C13.7383 27.5752 13.6892 27.5721 13.6406 27.566ZM27.5752 27.5752V33.0609L28.9946 29.634C29.1145 29.3445 29.3445 29.1145 29.634 28.9946L33.0609 27.5752H27.5752ZM38.765 25.2124H27.5752V4.03344L45.8284 22.2867L38.765 25.2124ZM47.4991 20.616L50.3275 13.7876L47.0098 5.77782L38.765 2.36274H29.2459L47.4991 20.616ZM25.2124 2.36274H14.0226L6.95919 5.28848L25.2124 23.5417V2.36274ZM23.3743 25.045H13.7876C13.7383 25.045 13.6892 25.0481 13.6406 25.0542L5.77782 21.7973L2.46007 13.7876L5.28848 6.95919L23.3743 25.045ZM39 27.6725L32.1716 30.5009L47.4991 45.8284L50.3275 39L47.0098 30.9902L39 27.6725ZM45.8284 47.4991L30.5009 32.1716L27.6725 39L30.9902 47.0098L39 50.3275L45.8284 47.4991ZM23.5417 50.2574L5.28848 32.0042L2.46007 38.8326L5.77782 46.8424L14.0226 50.2574H23.5417ZM14.0226 52.7876H25.2124V63.9774L22.2867 71.0408L6.95919 55.7133L14.0226 52.7876ZM5.28848 57.384L2.46007 64.2124L5.77782 72.2222L13.7876 75.5399L20.616 72.7115L5.28848 57.384Z"
                fill="#2F1160"
              />
            </svg>
          </div>

          <h3>Clinic Register</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            lacinia justo quam, quis pharetra quam tempus cursus. Integer
            pulvinar sollicitudin erat, quis viverra massa scelerisque vel
          </p>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="translate-y-6	">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="shadcn"
                    {...field}
                    type="password"
                    icon={eye}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
