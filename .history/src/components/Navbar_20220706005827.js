import React from 'react'
import {
  Flex,
  Stack,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  MenuGroup,
  Text,
  Icon,
  Container
} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaShoppingCart } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box mb={}>
      <Stack direction='row' pt={8}>
        <Container centerContent maxW='800px'>
          <Flex>
            {/* DESKTOP NAVBAR  */}
            <Stack
              direction='row'
              ml={7}
              justifyContent='center'
              alignItems='center'
              display={{ base: 'none', lg: 'flex' }}
            >
              <Menu>
                <Box px={3}>
                  <Link to='./story'>
                    <Text fontWeight='semibold'>Our Story</Text>
                  </Link>
                </Box>
                <Box px={3}>
                  <Link to='./shop'>
                    <Text fontWeight='semibold'>Shop</Text>
                  </Link>
                </Box>
                <Box px={3}>
                  <Link to='./contact'>
                    <Text fontWeight='semibold'>Contact</Text>
                  </Link>
                </Box>
                <Box px={3} direction='row' display='flex'>
                  <Link to='./cart'>
                    <Icon w={8} h={5} as={FaShoppingCart} />
                  </Link>
                  <Text fontWeight='semibold'>Your Cart</Text>
                </Box>
              </Menu>
            </Stack>
          </Flex>
        </Container>
      </Stack>

      {/* MOBILE NAVBAR  */}
      <Box align='right' flex={3} px={6}>
        <Box flex={1} display={{ base: 'inline-block', lg: 'none' }}>
          <Menu isLazy>
            <Link to='./cart'>
              <IconButton
                boxSize='3rem'
                icon={<FaShoppingCart />}
                linkButton={true}
                mx={2}
              />{' '}
            </Link>
            <MenuButton
              boxSize='3rem'
              as={IconButton}
              icon={<HamburgerIcon />}
              aria-label='Options'
            />
            <MenuList>
              <MenuGroup>
                <MenuItem pl={5}>
                  <Link to='./story'>Our Story</Link>
                </MenuItem>
                <MenuItem pl={5}>
                  <Link to='./shop'>Shop</Link>
                </MenuItem>
                <MenuItem pl={5}>
                  <Link to='./contact'>Contact</Link>
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
