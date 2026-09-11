import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Eroare 404"
      title={
        <>
          AM RĂTĂCIT <span className="text-brand">DRUMUL.</span>
        </>
      }
      lead="Pagina pe care o cauți nu există sau a fost mutată."
    >
      <Button to="/" variant="brand">
        Înapoi acasă
      </Button>
    </PageHero>
  )
}
