import { Link } from 'react-router-dom'
import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { HamburgerIcon } from '@chakra-ui/icons'
import { GoMarkGithub } from 'react-icons/go'
import {
  Flex,
  Stack,
  HStack,
  Spacer,
  MenuItem,
  MenuButton,
  Menu,
  MenuList,
  Box,
  MenuGroup,
  Text,
  Icon,
  Tooltip
} from '@chakra-ui/react'
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Stack direction={'row'} p={5}>
      <Flex w='full' mx={2}>
        <Logo />

        {/* DESKTOP  */}
        <HStack
          ml={7}
          justifyContent='center'
          alignItems='center'
          display={{ base: 'none', lg: 'flex' }}
        >
          <Menu>
            <Box px={3}>
              <Link to='./work'>
                <Text fontWeight='semibold'>Works</Text>
              </Link>
            </Box>
            <Box px={3}>
              <Link to='./contact'>
                <Text fontWeight='semibold'>Contact Me</Text>
              </Link>
            </Box>
          </Menu>
        </HStack>

        <Spacer />

        {/* RESPONSIVE  */}
        <Box flex={3} align='right' fontSize='md' fontWeight='semibold'>
          <Box flex={1} display={{ base: 'inline-block', lg: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <Tooltip
                label={isDark ? 'Light Mode' : 'Dark Mode'}
                fontSize='md'
              >
                <IconButton
                  boxSize='3rem'
                  mx={1}
                  icon={isDark ? <FaSun /> : <FaMoon />}
                  onClick={toggleColorMode}
                  colorScheme={isDark ? 'orange' : 'purple'}
                />
              </Tooltip>
              <Tooltip label='Menu' fontSize='md'>
                <MenuButton
                  boxSize='3rem'
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  aria-label='Options'
                  colorScheme={isDark ? 'blue' : 'blackAlpha'}
                />
              </Tooltip>
              <MenuList w={['80vw', '50vw']}>
                <MenuGroup>
                  <MenuItem pl={5}>
                    <Link to='./work'>Works</Link>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <Link to='./contact'>Contact</Link>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <a
                      href='https://www.linkedin.com/in/james-yoo-b4a1231a5/'
                      target='blank'
                    >
                      <Icon as={FaLinkedin} mr={1} />
                      LinkedIn
                    </a>
                  </MenuItem>
                  <MenuItem pl={5}>
                    <a href='https://github.com/jammy729' target='blank'>
                      <Icon as={GoMarkGithub} mr={1} />
                      GitHub
                    </a>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Box>

        <Box display={{ base: 'none', lg: 'flex' }}>
          <a
            href='https://www.linkedin.com/in/james-yoo-b4a1231a5/'
            target='blank'
          >
            <Tooltip label='LinkedIn' fontSize='md'>
              <IconButton
                icon={<FaLinkedin />}
                isRound='true'
                linkButton={true}
                mx={2}
              />
            </Tooltip>
          </a>
          <a href='https://github.com/jammy729' target='blank'>
            <Tooltip label='GitHub' fontSize='md'>
              <IconButton
                icon={<FaGithub />}
                isRound='true'
                linkButton={true}
              />
            </Tooltip>
          </a>
          <Tooltip label={isDark ? 'Light Mode' : 'Dark Mode'} fontSize='md'>
            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
              colorScheme={isDark ? 'orange' : 'purple'}
            />
          </Tooltip>
        </Box>
      </Flex>
    </Stack>
  )
}

export default Navbar
