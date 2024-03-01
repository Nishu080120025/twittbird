import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import useRegisterModal from "@/hooks/useRegisterModal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
    const loginModal =useLoginModal();
    const registerModal =useRegisterModal();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isLoading,setIsLoading] =useState(false);
    const onToggle=useCallback(()=>{
        if(isLoading){
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
        },[isLoading,loginModal,registerModal]
        );
    const onSubmit=useCallback(async()=>{
        try{
            setIsLoading(true);
            //todo and log in
            await signIn('credentials',{
                email,
                password
            });

            loginModal.onClose();

        }
        catch(error){
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }

        },[loginModal,email,password]
        );
        const bodyContent=(
            <div className="flex flex-col gap-4">
                <Input 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                disabled={isLoading}
        
                />
                <Input 
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                disabled={isLoading}
        
                />



            </div>
        )
        const footercontent=(
            <div className="text-neutral-400 text-center mt-4">
                <p>
                    First time using Twiitbird?
                    <span
                    onClick={onToggle}
                    className="text-white cursor-pointer hover:underline"
                    >
                    Create an account
                    </span>
                  
               
                </p>
                </div>
        )
    return (
       <Modal
       disabled={isLoading}
       isOpen={loginModal.isOpen}
       title="Login"
       actionLabel="Sign in"
       onClose={loginModal.onClose}
       onSubmit={onSubmit}
       body={bodyContent}
       footer={footercontent}

       />
    );
}

export default LoginModal;
