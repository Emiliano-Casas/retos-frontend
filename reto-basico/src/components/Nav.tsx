import {
	Box,
	Flex,
	useColorModeValue,
	Icon,
	Text,
	Link,
	Spacer,
	HStack
} from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
import { css } from '@emotion/react';

export default function Nav({ productName }: { productName?: string }) {
	const iconCSS = css({
		height: `1.5em`,
		width: `1.5em`
	});

	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack>
						<Text>Mobile Store</Text>
						{productName !== undefined &&
							<>
								<Text >{'>'}</Text>
								<Link href="www.google.com">{productName}</Link>
							</>
						}
					</HStack>
					<Spacer />
					{/* <Icon as={MdShoppingCart} css={iconCSS} ></Icon> */}
					<Icon as={MdShoppingCart} height="1.5em" width="1.5em"></Icon>
				</Flex>
			</Box>
		</>
	)
}