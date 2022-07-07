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
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
      <Container>
          <Stack direction='row' p={4}>
            <Flex>
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
                </Menu>
              </Stack>
            </Flex>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Navbar
