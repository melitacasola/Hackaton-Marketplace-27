import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom'
import Home from '../page'

describe(Home.name, () => {
  // it('renders learn react link', () => {
  //   // Arrange
  //   const expectedLinkText = /estoy/i;

  //   // Act
  //   render(<Home />);
  //   const linkElement = screen.getByRole('h2', { name: expectedLinkText }); //es para buscar links

  //   // Assert
  //   expect(linkElement).toBeInTheDocument();
  //   expect(linkElement).toHaveTextContent(expectedLinkText);
  // })
  it('should have Estoy text', () => {
  
    render(<Home />)

    const myElemt = screen.getByText('Estoy')
    expect(myElemt).toBeInTheDocument()
  
  })
  it('should have heading', () => {
    //ARRANGE
    render(<Home />)
    //ACT
    const myElemt = screen.getByRole('heading', {
      name:  "Estoy"
    })
    //ASSERT
    expect(myElemt).toBeInTheDocument()
  
  })
})

