import { useMemo } from "react";
export const DOTS = "...";
// our range generator function
const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, index) => index + start);
};

export const usePaginationRange = ({ totalPageCount, dataLimit, buttonConst, siblingCount, currentPage }) => {
	const paginationRange = useMemo(() => {
		// Pages count is determined as siblingCount + buttonConst(firstPage + lastPage + currentPage) + 2*DOTS
		const totalPageNumbers = buttonConst + 2 + siblingCount;

		/*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}
		/*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		/*
          We do not want to show dots if there is only one position left 
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		/*
     No left dots to show, but rights dots to be shown
    */

		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		/*
         No right dots to show, but left dots to be shown */

		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

			return [firstPageIndex, DOTS, ...rightRange];
		}

		/*
         Both left and right dots to be shown */

		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalPageCount, siblingCount, currentPage, buttonConst]);

	return paginationRange;
};
