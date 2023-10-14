import {
	Container,
	Heading,
	Stack,
	Text,
	Button,
} from '@chakra-ui/react';

export default function CallToActionWithIllustration() {
	return (
		<Container maxW={'5xl'}>
			<Stack
				textAlign={'center'}
				align={'center'}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}>
				<Heading
					fontWeight={600}
					fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
					lineHeight={'110%'}
					color={'orange.400'}>
					403.{' '}
					<Text as={'span'} color={'white'}>
						That's an error.
					</Text>
				</Heading>
				<Text color={'gray.500'} maxW={'3xl'}>
					The requested URL {'<URL here>'} was not found on this server.
				</Text>
				<Button
					rounded={'full'}
					px={6}
					colorScheme={'orange'}
					bg={'orange.400'}
					_hover={{ bg: 'orange.500' }}>
					Return Home
				</Button>
			</Stack>
		</Container>
	)
}