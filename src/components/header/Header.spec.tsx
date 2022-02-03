import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

describe('Header component', () => {
    it('renders correctly', () => {
        const { getByText } = render (
            <Header />
        )
        expect(getByText('Comics')).toBeInTheDocument();
        expect(getByText('Series')).toBeInTheDocument();
        expect(getByText('Characters')).toBeInTheDocument();
        expect(getByText('Events')).toBeInTheDocument();
    })
})
