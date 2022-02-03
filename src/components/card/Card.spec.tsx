import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

const card = {
    title: "homem aranha de volta para casa",
    id: "12",
    creators: "josé",
    image: "https://avatars.githubusercontent.com/u/79228713?v=4",
    type: "standart"
}

describe("Card component", () => {
    it("reciving", () => {
        const { getByText, getByAltText } = render (
            <Card title={card.title} id={card.id} creators={card.creators} image={card.image} type={card.type} />
        )

        expect(getByText(card.title)).toBeInTheDocument();
        expect(getByText(card.creators)).toBeInTheDocument();
        expect(getByAltText(card.image)).toBeInTheDocument();
        expect(getByText(card.type)).toBeInTheDocument();
    })
})
