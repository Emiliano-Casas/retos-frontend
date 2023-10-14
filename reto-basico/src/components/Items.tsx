import {
	Flex,
	Input,
	Spacer,
	Text,
	Box, Card,
	CardBody,
	Image,
	Heading,
	Grid,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link, Router } from "react-router-dom";
import { productsAPI } from '../typesConstants';

export default function Items() {
	const [items, setItems] = useState([]);
	useEffect(() => {
		fetch(productsAPI)
			.then(response => {
				response.json()
					.then(itemsJson => setItems(itemsJson));
			});
	}, []);

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
						<Link to={'/item/' + item.id} key={item.id}>
							<Card width="10rem" height="100%">
								<CardBody>
									<Flex direction="column" height="100%">
										<Image
											src={item.imgUrl}
											borderRadius='lg'
										/>
										<Heading size='md' mt="6">{item.model}</Heading>
										<Text>{item.brand}</Text>
										<Spacer />
										<Text color='blue.600' align="center" mt="3" fontSize='2xl'>
											{item.price}€
										</Text>
									</Flex>
								</CardBody>
							</Card>
						</Link>
					))
				}
			</Grid>
		</Box>
	)
}