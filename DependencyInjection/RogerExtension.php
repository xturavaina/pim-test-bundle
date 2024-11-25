<?php

namespace Xtura\Bundle\RogerBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\Yaml\Yaml;

class RogerExtension extends Extension
{
  public function load(array $configs, ContainerBuilder $container): void
  {
      $loader = new YamlFileLoader(
          $container,
          new FileLocator(__DIR__ . '/../Resources/config')
      );
      $loader->load('services.yml');

      // Carrega les extensions del formulari
      $formExtensionsFile = __DIR__ . '/../Resources/config/form_extensions.yml';
      if (file_exists($formExtensionsFile)) {
          $formExtensions = Yaml::parseFile($formExtensionsFile);
          if (isset($formExtensions['extensions'])) {
              $container->prependExtensionConfig(
                  'pim_enrich',
                  ['form_extensions' => $formExtensions['extensions']]
              );
          }
      }
  }
}