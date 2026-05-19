/* useBreakpoint.js */

import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../config/mediaQueries';

export function useBreakpoint() {
    const isXXS = useMediaQuery({ query: MEDIA_QUERIES.xxs});
    const isXS = useMediaQuery({ query: MEDIA_QUERIES.xs});
    const isSM = useMediaQuery({ query: MEDIA_QUERIES.sm});
    const isMD = useMediaQuery({ query: MEDIA_QUERIES.md});
    const isLG = useMediaQuery({ query: MEDIA_QUERIES.lg});
    const isXL = useMediaQuery({ query: MEDIA_QUERIES.xl});
    const isXXL = useMediaQuery({ query: MEDIA_QUERIES.xxl});

    return {
        isXXS,
        isXS,
        isSM,
        isMD,
        isLG,
        isXL,
        isXXL,

        isMobile: !isMD,
        isTablet: isMD && !isLG,
        isDesktop: isLG,
    };
}