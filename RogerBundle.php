<?php

namespace Xtura\Bundle\RogerBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class RogerBundle extends Bundle
{
  public function getPublicDir(): string
  {
      return __DIR__ . '/Resources/public';
  }

  public function getPath(): string
  {
      return \dirname(__DIR__, 3).'/Xtura/Bundle/RogerBundle';
  }
}