import {
	Flex, Input, Spacer, Text, Box,
	Card, CardHeader, CardBody, CardFooter,
	Image, Stack, Heading, Grid, VStack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Items() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("https://itx-frontend-test.onrender.com/api/product")
			.then(response => {
				response.json().then(itemsJson => setItems(itemsJson));
			});
	})

	return (
		<Box margin="0.5rem">
			<Flex justifyContent='right' paddingBottom='1'>
				<Spacer />
				<Input placeholder='Search' width='auto' alignSelf='right'></Input>
			</Flex>
			<Grid
				mt="0.5rem"
				templateColumns="repeat(auto-fill, minmax(10rem, 1fr))"
				rowGap="1rem">
				{
					items.map((item: any) => (
						<Card key={item.id} width="10rem">
							<CardBody>
								<Flex direction="column" height="100%">
									<Image
										src={item.imgUrl}
										borderRadius='lg'
									/>
									{/* <VStack height="auto" width="100%"> */}
									<Heading size='md' mt="6">{item.model}</Heading>
									<Text>{item.brand}</Text>
									<Spacer />
									<Text color='blue.600' align="center" mt="3" fontSize='2xl'>
										{item.price}€
									</Text>
									{/* </VStack> */}
								</Flex>
							</CardBody>
						</Card>
					))
				}
			</Grid>
		</Box>
	)
}