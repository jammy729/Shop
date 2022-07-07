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

const Navbar = () => {
  return (
    <Stack direction='row' p={5}>
      <Flex>
        {/* LOGO  */}
        {/* DESKTOP MENU  */}
        <Stack direction='row'>
          <Menu>
            <Box>
                
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
