import { Box } from "@mui/material";
import { Avatar, AvatarFallback, Button } from "../ui/index"
import { useNavigate } from "react-router-dom";

interface ProfileDropdownLinkProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const ProfileDropdown = () => {
    const navigate = useNavigate();

    const ProfileDropDownLink = ({onClick, text, className}: ProfileDropdownLinkProps) => {
        return (
            <Box 
                className={`${className} h-10 py-2 underline-offset-4 hover:underline cursor-pointer`}
                onClick={onClick}
            >
                {text}
            </Box>
        );
    }

    const handleHelpClick = () => {
        navigate('/help'); // Navigate to /help page
    }

    return (
        <>
            <Box className='absolute right-0 top-full w-64 flex gap-4 flex-col justify-around py-6 px-8 bg-white border-2 border-gray-300 shadow-md rounded-md cursor-default'>
                <Box className='flex flex-col h-42 gap-4 items-center'>
                    <Avatar>
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback>KS</AvatarFallback>
                    </Avatar>
                    <h1 className="font-bold">Krishna Singha</h1>
                </Box>
                <Box className="flex flex-col font-bold">
                    <ProfileDropDownLink text='Unlock Premium' className='text-green-700' onClick={() => alert('Placeholder')}/>
                    <ProfileDropDownLink text='View Profile' className='text-primary' onClick={() => alert('Profile page still needs to be implemented.')}/>
                    <ProfileDropDownLink text='Settings' className='text-primary' onClick={() => alert('Settings page still needs to be implemented.')}/>
                    <ProfileDropDownLink text='Help' className='text-primary' onClick={handleHelpClick}/>
                </Box>
                <Button variant='destructive' onClick={() => alert('Auth still needs to be implemented.')}>Log Out</Button>
            </Box>
        </>
    );
};

export default ProfileDropdown;
