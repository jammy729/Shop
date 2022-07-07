import React from 'react'
import {
  Flex,
  Stack,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Box,
  MenuGroup,
  Text,
  Icon,
  Tooltip
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack direction='row' p={5}>
      <Flex>
        {/* LOGO  */}
        {/* DESKTOP MENU  */}
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

        {/* DESKTOP RIGHT MENU  */}
        {/* MOBILE MENU */}
      </Flex>
    </Stack>
  )
}

export default Navbar
