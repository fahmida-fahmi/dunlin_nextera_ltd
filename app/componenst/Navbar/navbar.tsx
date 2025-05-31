'use client';
import React from 'react';
import Image from 'next/image';
import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Link from 'next/link';

interface MenuSection {
  label: string;
  submenu?: (string | { label: string; children: string[] })[];
  children?: { label: string; items: string[] }[];
}

const menu: MenuSection[] = [
  { label: 'Home' },
  { label: 'About Us' },
  {
    label: 'Our Services',
    submenu: [
      'Strategic Management Services',
      'Financial Services',
      'Marketing & Brand Services',
      'Production & Operations Services',
      'Compliance & Regulatory Services',
      'Internal Audit & Risk Advisory',
      'Administrative Services',
      'Human Resource Services',
      'Customer Support Services',
      'IT & Digital Services',
      'Corporate Social Responsibility Services',
    ],
  },
  {
    label: 'Membership',
    submenu: [
      'Client',
      'Vendor',
      'Intern',
      'Referee',
      'Specialist',
      'Professional',
      'Contributor',
      'Ambassador',
    ],
  },
  {
    label: 'Partners',
    submenu: [
      "Partner's Platform",
      "Shareholder's Platform",
      "Entrepreneur's Platform",
      'Escrow Payment System',
      'Digital Agreement',
      'Payment Gateway',
      "Current A/c of Partners",
    ]
  },
  {
    label: 'Operations',
    submenu: [
      'Cost Estimation',
      'Bidding Hub',
      'Digital Agreement',
      'Project Management',
      'Workstation',
      'Deliverables Management',
      'Quality Assurance',
      'Conflict Resolution',
      'Bill Processing',
      `Member's Current A/c`,
      'Payment Processing',
    ],
  },
  {
    label: 'Integrations',
    submenu: [
      'Getting Started',
      'Strategic Management Services',
      'Financial Services',
      'Marketing & Brand Services',
      'Production & Operations Services',
      'Compliance & Regulatory Services',
      'Internal Audit & Risk Advisory',
      'Administrative Services',
      'Human Resource Services',
      'Customer Support Services',
      'IT & Digital Services',
      'Corporate Social Responsibility Services',
      'FAQ',
      'Tutorials',
      'Member Support',
    ],
  },
  {
    label: 'Career',
    submenu: [
      'Job Opportunities',
      'Growth and Development',
      'Recognition and Rewards',
      'Networking and Community',
      'Resources and Support',
      'Application Information',
    ],
  },
  {
    label: 'SkillSphere',
    submenu: [
      'E-learning',
      'Training',
      'Business News',
      'Business Blogs',
      `What's New in Business`,
      'AI Chatbot',
      'FAQs',
      'Queries',
      'Yellow Page',
    ],
  },
  { label: 'Contact Us' },
];
const navVariants: Variants = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function NavBar() {
  const [mobileAnchor, setMobileAnchor] = React.useState<null | HTMLElement>(null);
  const [hovered, setHovered] = React.useState<number | null>(null);

  const openMobileMenu = (e: React.MouseEvent<HTMLElement>) => setMobileAnchor(e.currentTarget);
  const closeMobileMenu = () => setMobileAnchor(null);

  return (
    <motion.nav initial="offscreen" animate="onscreen" variants={navVariants} className="">
      <AppBar position="fixed" color="inherit" elevation={2} sx={{ boxShadow: '0px 2px 4px rgba(0,0,0,0)' }}>
        <Container maxWidth={false} sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Toolbar disableGutters className="flex justify-between items-center text-sm"  >
            {/* desktop logo */}
            <Box sx={{ display: { xs: 'none', xl: 'flex' } }}>
              <Image src={logo1} alt="Logo" width={40} height={40} />
            </Box>

            {/* mobile menu button & logo */}
            <Box className="flex items-center xl:hidden">
              <IconButton onClick={openMobileMenu}>
                <MenuIcon />
              </IconButton>
              <Box className="ml-2">
                <Image src={logo2} alt="Logo" width={100} height={32} />
              </Box>
            </Box>

            {/* mobile dropdown */}
            <Menu
              anchorEl={mobileAnchor}
              open={Boolean(mobileAnchor)}
              onClose={closeMobileMenu}
            >
              {menu.map((sec) => (
                <Box key={sec.label} px={2} py={1}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {sec.label}
                  </Typography>
                  {(sec.submenu || sec.children)?.map((item) =>
                    typeof item === 'string' ? (
                      <MenuItem key={item} onClick={closeMobileMenu}>
                        {item}
                      </MenuItem>
                    ) : (
                      <MenuItem key={item.label} onClick={closeMobileMenu}>
                        {item.label}
                      </MenuItem>
                    )
                  )}
                </Box>
              ))}
            </Menu>

            {/* desktop nav items */}
            <Box className="hidden xl:flex relative">
              {menu.map((sec, idx) => (
                <Box
                  key={sec.label}
                  className="relative"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => {
                    setHovered(null)
                  }}
                >
                  <Button
                    className="relative"

                    endIcon={
                      (sec.submenu ?? sec.children ?? []).length > 0
                        ? hovered === idx
                          ? <KeyboardDoubleArrowUpIcon fontSize="small" />
                          : <KeyboardDoubleArrowDownIcon fontSize="small" />
                        : null
                    }
                    sx={{ color: 'green', fontWeight: '400' }}
                  >
                    {sec.label}
                  </Button>

                  <AnimatePresence>
                    {hovered === idx && (sec.submenu || sec.children) && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-2 bg-green-100 shadow-xl rounded-lg py-6 z-50  w-max overflow-x-auto"
                        style={{
                          left: idx > menu.length / 2 ? 'auto' : 0,
                          right: idx > menu.length / 2 ? '-100px' : 'auto',
                        }}
                      >
                        <Box
                          className="grid"
                          style={{
                            gridTemplateColumns: `repeat(${Math.ceil((sec.submenu?.length ?? 0) / 5)}, minmax(0, 1fr))`,
                          }}
                        >
                          {sec.submenu && sec.submenu.map((item,) => {
                            if (typeof item === 'string') {
                              return (
                                <Link
                                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                  key={item}
                                  className="text-sm text-green-600 cursor-pointer hover:bg-green-200 whitespace-nowrap py-3 px-8 rounded-lg transition-colors duration-200 hover:text-green-900 font-bold"
                                >
                                  {item}
                                </Link>
                              );
                            }
                          })}
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              ))}
            </Box>

            {/* right side icons */}
            <Box className="flex items-center gap-4 ">
              <Link href="/login">
                <Button variant="outlined" color="primary">
                  Sign In
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* push content down so AppBar doesn't cover */}
      <Toolbar />
    </motion.nav>
  );
}
