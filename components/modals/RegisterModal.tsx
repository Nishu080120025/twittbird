import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Modal from "../Modal";
import Input from "../Input";
import useRegisterModal from "@/hooks/useRegisterModal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
    const loginModal =useLoginModal();
    const registerModal=useRegisterModal();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [isLoading,setIsLoading] =useState(false);
    const onToggle=useCallback(()=>{
        if(isLoading){
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
        },[isLoading,loginModal,registerModal]
        );
    const onSubmit=useCallback(async()=>{
        try{
            setIsLoading(true);
            //todo and register
            await axios.post('/api/register',{
                email,
                password,
                username,
                name,
            });
            toast.success('Account created successfully');
            signIn('credentials',{
                email,
                password,
            });

            registerModal.onClose();

        }
        catch(error){
            console.log(error);
            toast.error('Something went wrong');
        }
        finally{
            setIsLoading(false);
        }

        },[loginModal,email,password,username,name]
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
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                disabled={isLoading}
        
                />
                <Input 
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
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
                    Already have an account?{" "}
                    <span
                    onClick={onToggle}
                    className="text-white cursor-pointer hover:underline"
                    >
                    Login
                    </span>
                  
               
                </p>
                </div>
        )
    return (
       <Modal
       disabled={isLoading}
       isOpen={registerModal.isOpen}
       title="Create Acoount"
       actionLabel="Register"
       onClose={registerModal.onClose}
       onSubmit={onSubmit}
       body={bodyContent}
       footer={footercontent}

       />
    );
}

export default RegisterModal;
