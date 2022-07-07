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
  Tooltip,
  Container,
  Center
} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <Stack direction='row' p={4}>
      <Flex>
        {/* DESKTOP MENU  */}
        <Container>
          <Center>
            <Stack
              direction='row'
              ml={7}
              justifyContent='center'
              alignItems='center'
              display={{ base: 'none', lg: 'flex' }}
            >
              <Menu></Menu>
            </Stack>
          </Center>
        </Container>
      </Flex>
    </Stack>
  )
}
