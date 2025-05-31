
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // Twitter/X
import IconButton from '@mui/material/IconButton';


const socialLinks = [
    {
        label: 'App Store',
        href: 'https://www.apple.com/app-store/',
        icon: <AppleIcon fontSize="medium" />,
    },
    {
        label: 'Google Play',
        href: 'https://play.google.com/store',
        icon: <AndroidIcon fontSize="medium" />,
    },
    {
        label: 'Facebook',
        href: 'https://facebook.com',
        icon: <FacebookIcon fontSize="small" />,
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com',
        icon: <YouTubeIcon fontSize="small" />,
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com',
        icon: <InstagramIcon fontSize="small" />,
    },
    {
        label: 'Twitter/X',
        href: 'https://x.com',
        icon: <XIcon fontSize="small" />,
    },
];

const SocialLinks = () => {
    return (
        <footer className="">
            <div className="w-6/7 mx-auto px-1 py-10 text-white">
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-700 pt-4">
                    <p>© 2024 YourCompany</p>
                    <p>Call Toll Free: 1-888-000-0000</p>
                    <div className="flex gap-4 mt-4 md:mt-0 text-white">
                            {socialLinks.map((link, index) => (
                                <IconButton
                                    key={index}
                                    component="a"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    sx={{ color: '#99a1af', '&:hover': { color: '#e342cd' } }}
                                >
                                    {link.icon}
                                </IconButton>
                            ))}

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SocialLinks;
