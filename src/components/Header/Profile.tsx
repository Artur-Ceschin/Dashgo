import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Artur Ceschin</Text>
                <Text color="gray.300" fontSize="small">
                    artur.ceschin@gmail.com
                </Text>
            </Box>
            <Avatar
                size="md"
                name="Artur Ceschin"
                src="https://github.com/Artur-Ceschin.png"
            />
        </Flex>
    );
}
