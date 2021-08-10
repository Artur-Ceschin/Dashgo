import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
} from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                    <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                    <NavLink icon={RiContactsLine}>Usuário</NavLink>
                </NavSection>
                <NavSection title="AUTOMAÇÃO">
                    <NavLink icon={RiInputMethodLine}>Formulário</NavLink>
                    <NavLink icon={RiGitMergeLine}>Automação</NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}