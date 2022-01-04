import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, index) => from + index + 1)
        .filter((page) => page > 0);
}

export function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);
    const previousPages =
        currentPage > 1
            ? generatePagesArray(
                  currentPage - 1 - siblingsCount,
                  currentPage - 1
              )
            : [];
    const nextPages =
        currentPage < lastPage
            ? generatePagesArray(
                  currentPage,
                  Math.min(currentPage + 1, siblingsCount, lastPage)
              )
            : [];
    return (
        <Stack
            direction={["column", "row"]}
            spacing="6"
            mt="8"
            justify="space-between"
            align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {previousPages.length > 0 &&
                    previousPages.map((page) => {
                        return <PaginationItem key={page} number={page} />;
                    })}
                <PaginationItem number={currentPage} isCurrent />
                {nextPages.length > 0 &&
                    nextPages.map((page) => {
                        return <PaginationItem key={page} number={page} />;
                    })}
            </Stack>
        </Stack>
    );
}
