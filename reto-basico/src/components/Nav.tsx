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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { itemJson } from '../typesConstants';
import { getItem } from '../utility';
export default function Nav() {
	const { itemID } = useParams();
	const [item, setItem] = useState<itemJson>(Object)
	useEffect(() => {
		if (itemID !== undefined) {
			getItem(itemID).then(newItem => {
				setItem(newItem);
			});
		}
	}, [itemID]);
	return (
		<>
			<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
				<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
					<HStack>
						<Link href={location.origin}><Text>Mobile Store</Text></Link>
						{itemID !== undefined &&
							<>
								<Text >{'>'}</Text>
								<Link href={location.href}>{item.model}</Link>
							</>
						}
					</HStack>
					<Spacer />
					<Icon as={MdShoppingCart} height="1.5em" width="1.5em"></Icon>
				</Flex>
			</Box>
		</>
	)
}