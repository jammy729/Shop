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
        <Stack
          direction='row'
          ml={7}
          justifyContent='center'
          alignItems='center'
          display={{ base: 'none', lg: 'flex' }}
        >
          <Menu>
            <Box>
              <Link>
                <Text> About Us</Text>
              </Link>
            </Box>
          </Menu>
        </Stack>
        {/* DESKTOP RIGHT MENU  */}
        {/* MOBILE MENU */}
      </Flex>
    </Stack>
  )
}

export default Navbar
