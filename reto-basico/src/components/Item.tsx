import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	Text, Box,
	Container,
	Stack,
	Image,
	Flex,
	VStack,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
	List,
	ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md'
import { itemJson } from '../typesConstants';
import { getItem } from '../utility';

const productDetails = [
	'price',
	'cpu',
	'ram',
	'os',
	'displayResolution',
	'battery',
	'primaryCamara',
	'secondaryCamara',
	'dimentions',
	'weight'
];

export default function Item() {
	const { itemID } = useParams();
	const [item, setItem] = useState<itemJson>(Object);
	useEffect(() => {
		getItem(itemID).then(newItem => {
			setItem(newItem);
		});
	}, [itemID]);
	return (
		<Container maxW={'7xl'}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}>
				<Flex>
					<Image
						rounded={'md'}
						alt={'product image'}
						src={item.imgUrl}
					/>
				</Flex>
				<Stack spacing={{ base: 6, md: 10 }}>
					<Box as={'header'}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
							{item.model}
						</Heading>
						<Text
							color={useColorModeValue('gray.900', 'gray.400')}
							fontWeight={300}
							fontSize={'2xl'}>
							$350.00 USD
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={'column'}
						divider={
							<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
						}>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text
								color={useColorModeValue('gray.500', 'gray.400')}
								fontSize={'2xl'}
								fontWeight={'300'}>
								{item.brand}
							</Text>
							{/* <Text fontSize={'lg'}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
								at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
								porro, quae, quisquam quos reprehenderit velit? Natus, totam.
							</Text> */}
						</VStack>
						{/* <Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue('yellow.500', 'yellow.300')}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}>
								Features
							</Text>

							<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
								<List spacing={2}>
									<ListItem>Chronograph</ListItem>
									<ListItem>Master Chronometer Certified</ListItem>{' '}
									<ListItem>Tachymeter</ListItem>
								</List>
								<List spacing={2}>
									<ListItem>Anti‑magnetic</ListItem>
									<ListItem>Chronometer</ListItem>
									<ListItem>Small seconds</ListItem>
								</List>
							</SimpleGrid>
						</Box> */}
						<Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue('yellow.500', 'yellow.300')}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}>
								Product Details
							</Text>
							<List spacing={2}>

								{productDetails.map((detail: string, i) => {
									const jsonProp = detail as keyof typeof item;
									if (item[jsonProp] !== undefined && item[jsonProp] !== '') {
										return (
											<ListItem key={i}>
												<Text as={'span'} fontWeight={'bold'}>
													{detail}:
												</Text>{' ' + item[jsonProp]}
											</ListItem>
										)
									}
								})}

								{/* <ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										CPU:
									</Text>{' ' + item.brand}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										RAM:
									</Text>
									{' ' + item.ram}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										OS:
									</Text>{' ' + item.os}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										displayResolution:
									</Text>{' ' + item.displayResolution}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Battery:
									</Text>{' ' + item.battery}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Primary Camara:
									</Text>{' ' + item.primaryCamara}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Secondary Camara:
									</Text>{' ' + item.secondaryCamara}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Water resistance:
									</Text>{' '}
									5 bar (50 metres / 167 feet){' '}
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Water resistance:
									</Text>{' '}
									5 bar (50 metres / 167 feet){' '}
								</ListItem> */}
							</List>
						</Box>
					</Stack>

					<Button
						rounded={'none'}
						w={'full'}
						mt={8}
						size={'lg'}
						py={'7'}
						bg={useColorModeValue('gray.900', 'gray.50')}
						color={useColorModeValue('white', 'gray.900')}
						textTransform={'uppercase'}
						_hover={{
							transform: 'translateY(2px)',
							boxShadow: 'lg',
						}}>
						Add to cart
					</Button>

					<Stack direction="row" alignItems="center" justifyContent={'center'}>
						<MdLocalShipping />
						<Text>2-3 business days delivery</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	)
}