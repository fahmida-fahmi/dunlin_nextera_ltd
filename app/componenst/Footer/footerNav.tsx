import Image from 'next/image';
import Link from 'next/link';
import logo2 from '../../../public/logo2.png'; // Adjust the path as necessary


const footerLinks = [
    {
        title: 'Company',
        items: ['About', 'Contact', 'Blog'],
    },
    {
        title: 'Product',
        items: ['Invoice Software', 'Time Tracking', 'Online Payments'],
    },
    {
        title: 'Who It’s For',
        items: ['Freelancers', 'Accountants', 'Consultants'],
    },
    {
        title: 'Helpful Links',
        items: ['Login', 'Support', 'Invoice Template'],
    },
    {
        title: 'Policies',
        items: ['Privacy', 'Terms of Service'],
    },
];

const FooterNav = () => {
    return (
        <footer className="  bg-white">
            <div className="w-6/7 mx-auto px-1 py-10 text-white">
                {/* <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8"> */}
                {/* Logo + Country */}
                <div className="grid grid-cols-2 gap-4 py-5 border-t border-gray-300 md:flex md:justify-between items-center">
                    <Image src={logo2} alt="Logo" className="w-32" />
                    <div className='flex justify-end'>

                        <select className="border rounded px-2 py-1 text-sm ">
                            <option>United States</option>
                            <option>Bangladesh</option>
                            <option>Canada</option>
                        </select>
                    </div>
                </div>

                {/* Dynamic Columns */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 flex-1">
                    {footerLinks.map((column, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-semibold text-red-500 mb-3">{column.title}</h3>
                            <ul className="space-y-2 text-sm text-gray-500">
                                {column.items.map((item, i) => (
                                    <li key={i}>
                                        <Link href="#" className="hover:underline">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterNav;
