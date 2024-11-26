<?php
namespace Xtura\Bundle\XturaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Akeneo\Pim\Enrichment\Component\Product\Repository\ProductRepositoryInterface;

class MagentoController extends AbstractController
{
    private ProductRepositoryInterface $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * @Route("/custom-button/get-product-name", methods={"POST"})
     */
    public function getProductName(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $productId = $data['productId'] ?? null;

        if (!$productId) {
            return new JsonResponse(['success' => false, 'message' => 'Falta el productId'], 400);
        }

        // Buscar el producte a Akeneo
        $product = $this->productRepository->findOneByIdentifier($productId);

        if (!$product) {
            return new JsonResponse(['success' => false, 'message' => 'Producte no trobat'], 404);
        }

        // Retornar només el nom del producte
        $productName = $product->getValue('name')->getData();
        return new JsonResponse(['success' => true, 'productName' => $productName]);
    }
}
